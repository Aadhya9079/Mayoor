import React, { useState, useEffect } from "react";
import styles from "./StudentSelectStyles"; // Importing styles
import bellIcon from "../assets/bell.png";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import StudentReport from "../Student_report/StudentReport.jsx";
import TeacherProfile from "../TeacherProfile/index.jsx"
import loading from "./loading.gif";
import Menu from "../MenuBar";

const StudentList = ({ onStudentsData, setIndex }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]); // Stores API student list
  const [filteredStudents, setFilteredStudents] = useState([]); // Stores search-filtered students
  const [isFocused, setIsFocused] = useState(false);
  const [showReport, setShowReport] = useState(null);
  const [showTeacherProfile, setShowTeacherProfile] = useState(false);
 
  const handleProfileClick = () => alert("Go to Profile");
  const handleSettingsClick = () => alert("Open Settings");
  const handleLogoutClick = () => alert("Logging Out...");
  const handleReport = (student) => {
    setShowReport(student); // Set the clicked student
  }

  const handleProfile = () => {
    setShowTeacherProfile(true);
  }
  const handleClick =()=>{
    setIndex(1)
  }

  const handleBackToList1 = () => {
    setShowReport(null); // Back to student list from report
  }

  const handleBackToList2 = () => {
    setShowTeacherProfile(false); // Back to student list from teacher profile
  }
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);
  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredStudents(
        Array.isArray(students)
          ? students.filter((student) =>
              student.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : []
      )
    }, 300)

    return () => clearTimeout(handler);
  }, [searchTerm, students]);

  useEffect(() => {
    const loadStudents = async () => {
      if (!userData || students.length > 0) return; // Prevent unnecessary API calls
  
      try {
        const headers = {
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
          "Content-Type": "application/json",
          year: userData?.year,  
          classname: userData?.class,
          section: userData?.section,
          subject: userData?.subject,
        };
  
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/students`, { headers });
        console.log("Response Data:", response.data);

        let re = /(\b[a-z](?!\s))/g

        response.data.students.map(student => {student.name = student.name.toLowerCase().replace(re, function(x){return x.toUpperCase();})})
  
        if (response.data && Array.isArray(response.data.students)) {
          setStudents(response.data.students);
          onStudentsData(response.data.students);
        } else {
          console.warn("Expected an array but received:", response.data);
          setStudents([]);
        }
      } catch (error) {
        console.error("Error fetching students:", error.response || error.message);
        setStudents([]);
      }
    };
  
    if (userData && Object.keys(userData).length > 0 && students.length === 0) {
      loadStudents();
    }
  }, [userData]);  // Removed `onStudentsData` from dependencies

  if (showReport) {
    return <StudentReport student={showReport} onBack={handleBackToList1} />;
  }

  if (showTeacherProfile) {
    return <TeacherProfile onBack={handleBackToList2} />;
  }

  return (
    <div style={styles.container}>
      
      <div style={styles.header}>
        <div style={styles.searchContainer}>
          <div
            style={{
              ...styles.searchBox,
              backgroundColor: isFocused ? "white" : "rgba(255, 255, 255, 0.6)",
            }}
          >
            <input
              type="text"
              placeholder="Search"
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <IoSearchOutline style={styles.searchIcon} />
          </div>

          <div style={styles.iconWrapper}>
            {/* <img src={bellIcon} alt="Bell Icon" style={{ width: "22px", height: "22px" }} /> */}
            {/* <img src={userIcon} alt="User Icon" onClick={handleProfile} style={{ width: "22px", height: "22px" }} /> */}
            <Menu
             onProfileClick={handleProfileClick}
             onSettingsClick={handleSettingsClick}
             onLogoutClick={handleLogoutClick}
             onReturnClick={handleClick}
          />
          </div>
        </div>
        
        {/* <h2 style={styles.title}>Student List</h2> */}
      </div>

      {/* Student List */}
      <div style={{width : "100%"}}>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <div className="student-item" key={index} style={styles.listItem} onClick={() => handleReport(student)}>
              <span className="initials">{student.name.split(' ')[0][0] + student.name.split(' ')[1][0].toUpperCase()}</span><span>{student.name}</span>
            </div>
          ))
        ) : (
          <div style={styles.noResults}>
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
