import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CourseInformation from './Courseinformation';
import CourseMaterials from './Coursematerials';
import HeaderUser from '../HomepageUser/HeaderUser';
import Footer from '../HomepageUser/Footer';

export default function CreateCourse() {


    

    const [step, setStep] = useState(1);

    const [courseInforData, setCourseInforData] = useState({
        // Add more fields as needed
        cRate: '',
        cEnrolledStudent: 0
    });

    const date = new Date();

    //HANDLE COURSE MODULE FROM HERE 
    const [modules, setModules] = useState([]);

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:9999/course')
          .then(res => res.json())
          .then(res => {
            setCourses(res);
        })
          .catch(err => console.log(err));
    }, []);

    function handleAddModule() {
        if (modules.length < 4) {
            const newModuleId = modules.length > 0 ? modules[modules.length - 1].id + 1 : 1;
            setModules([...modules, { id: newModuleId, name: `Module ${newModuleId}`, cVideo: [], cQuiz: [] }]);
            console.log(modules);
        }
    }

    const handleDeleteModule = (moduleId) => {
        const updatedModules = modules.filter(module => module.id !== moduleId);
        setModules(updatedModules);
    };


    // TO HERE
    const handleFinalSubmit = (e) => {
        e.preventDefault();
        // setCourseId(courses.length + 1);
        // console.log(courses.length);
        const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const finalCourseInfor = {id: (courses.length + 1).toString(),  ...courseInforData, uCreateDate: currentDate, courseModule: modules };
        console.log(finalCourseInfor);
        fetch('http://localhost:9999/course', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalCourseInfor)
        })
            .then(res => res.json())
            .then( () => {
                alert(`Create successfully`);
                // Resetting form data after submission
                setCourseInforData({
                    cRate: '',
                    cEnrolledStudent: 0
                });
                setModules([]);
                setStep(1);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setCourseInforData({ ...courseInforData, cImage: reader.result });
            console.log(courseInforData);
        };
        reader.readAsDataURL(file);
    };

    function handleNext() {
        setStep(step + 1);
    };

    function handlePrevious() {
        if (step != 1)
            setStep(step - 1);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        const updatedValue = name === 'cPrice' ? parseInt(value) : value;
        setCourseInforData(prevData => ({
            ...prevData,
            [name]: updatedValue
        }));
        console.log(courseInforData);
    }



    function renderCourse() {

        switch (step) {
            case 1:
                return <CourseInformation
                    courseInforData={courseInforData}
                    handleChange={handleChange}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    handleImageChange={handleImageChange}
              
                />

            case 2:
                return <CourseMaterials
                    handlePrevious={handlePrevious}
                    handleFinalSubmit={handleFinalSubmit}
                    handleAddModule={handleAddModule}
                    modules={modules}
                    setModules={setModules}
                    handleDeleteModule={handleDeleteModule}

                />
        }
    }


    return (
        <Container fluid>
<HeaderUser/>
        <Container style={{ width: "80%" }}>
            
            {renderCourse()}
            
        </Container>
        <Footer/>
        </Container>
    );
}


