const getUser = () => JSON.parse(localStorage.getItem('@user')) || [];
const setUser = (user) => localStorage.setItem('@user', JSON.stringify(user));

const getStudent = () => JSON.parse(localStorage.getItem("@student")) || [];
const setStudent = (student) => localStorage.setItem("@student", JSON.stringify(student));

const getUserLogado = () => JSON.parse(localStorage.getItem("@userLogado")) || [];
const setStudentLogado = (userLogado) => localStorage.setItem("@userLogado", JSON.stringify(userLogado));

const getCourse = () => JSON.parse(localStorage.getItem("@course")) || [];
const setCourse = (course) => localStorage.setItem("@course", JSON.stringify(course));