import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaJsSquare, FaHtml5, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa"; // Import các icon từ react-icons

const Skills = () => {
    // Dữ liệu kỹ năng với icon từ react-icons
    const frontEndSkills = [
        { name: "ReactJS", icon: < FaReact className = "w-6 h-6 text-blue-400" / > , level: "Basic" },
        { name: "TailwindCSS", icon: < FaCss3Alt className = "w-6 h-6 text-teal-400" / > , level: "Basic" },
        { name: "JavaScript", icon: < FaJsSquare className = "w-6 h-6 text-yellow-400" / > , level: "Basic" },
        { name: "HTML & CSS", icon: < FaHtml5 className = "w-6 h-6 text-orange-400" / > , level: "Basic" }
    ];

    const backEndSkills = [
        { name: "NodeJS", icon: < FaNodeJs className = "w-6 h-6 text-green-400" / > , level: "Basic" },
        { name: "ExpressJS", icon: < FaNodeJs className = "w-6 h-6 text-gray-400" / > , level: "Basic" },
        { name: "MongoDB", icon: < FaDatabase className = "w-6 h-6 text-green-600" / > , level: "Basic" },
        { name: "SQL", icon: < FaDatabase className = "w-6 h-6 text-gray-400" / > , level: "Basic" }
    ];

    const otherTools = [
        { name: "Git & GitHub", icon: < FaGitAlt className = "w-6 h-6 text-red-400" / > , level: "Basic" },
        { name: "Docker", icon: < FaDocker className = "w-6 h-6 text-blue-400" / > , level: "Basic" }
    ];

    return ( <
        motion.div className = "flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 lg:px-16"
        initial = {
            { opacity: 0, y: 50 } }
        animate = {
            { opacity: 1, y: 0 } }
        exit = {
            { opacity: 0, y: -50 } }
        transition = {
            { duration: 0.8, ease: "easeInOut" } } >
        { /* Tiêu đề */ } <
        h1 className = "text-5xl md:text-6xl font-bold mb-10 text-center" > Skills < /h1>

        { /* Bố cục 2 cột giống ảnh */ } <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full" >

        { /* Cột Front End */ } <
        motion.div initial = {
            { opacity: 0, x: -50 } }
        animate = {
            { opacity: 1, x: 0 } }
        transition = {
            { duration: 1, ease: "easeOut", delay: 0.3 } }
        className = "text-center" >
        <
        h2 className = "text-2xl font-semibold mb-4" > Front End < /h2> <
        div className = "space-y-4" > {
            frontEndSkills.map((skill, index) => ( <
                div key = { index }
                className = "bg-gray-800 p-4 rounded-lg flex justify-between items-center text-lg" >
                <
                div className = "flex items-center space-x-3" > { skill.icon } <
                span > { skill.name } < /span> <
                /div> <
                span className = "text-gray-300" > { skill.level } < /span> <
                /div>
            ))
        } <
        /div> <
        /motion.div>

        { /* Cột Back End */ } <
        motion.div initial = {
            { opacity: 0, x: 50 } }
        animate = {
            { opacity: 1, x: 0 } }
        transition = {
            { duration: 1, ease: "easeOut", delay: 0.5 } }
        className = "text-center" >
        <
        h2 className = "text-2xl font-semibold mb-4" > Back End < /h2> <
        div className = "space-y-4" > {
            backEndSkills.map((skill, index) => ( <
                div key = { index }
                className = "bg-gray-800 p-4 rounded-lg flex justify-between items-center text-lg" >
                <
                div className = "flex items-center space-x-3" > { skill.icon } <
                span > { skill.name } < /span> <
                /div> <
                span className = "text-gray-300" > { skill.level } < /span> <
                /div>
            ))
        } <
        /div> <
        /motion.div> <
        /div>

        { /* Khu vực Other Tools */ } <
        motion.div initial = {
            { opacity: 0, y: 20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 1, ease: "easeOut", delay: 0.7 } }
        className = "text-center mt-12 w-full max-w-3xl" >
        <
        h2 className = "text-2xl font-semibold mb-4" > Other Tool < /h2> <
        div className = "space-y-4" > {
            otherTools.map((skill, index) => ( <
                div key = { index }
                className = "bg-gray-800 p-4 rounded-lg flex justify-between items-center text-lg" >
                <
                div className = "flex items-center space-x-3" > { skill.icon } <
                span > { skill.name } < /span> <
                /div> <
                span className = "text-gray-300" > { skill.level } < /span> <
                /div>
            ))
        } <
        /div> <
        /motion.div> <
        /motion.div>
    );
};

export default Skills;