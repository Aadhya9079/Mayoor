import styled from "styled-components";
const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Prevent overflowing of the container */
    background-color: #21C3BC;
    .search-container {
      display: flex;
      gap: 5px;
      align-items: center;
      position: relative;
      // width: 100%;
      margin: 15px 0;
      padding-left: 12px;
      padding-right:12px;
    }
    .menu{
    padding-right:17px;
    }
    .icon{
      display: flex;
      // gap: 12px;
      align-items: center;
      // padding-right: 15px;
    }
       .search-bar {
      width: 100%;
      padding: 10px 40px 10px 15px; /* Padding for space for the search icon */
      font-size: 16px;
      border-radius: 25px;
      border: 1px solid #ddd; /* Same border color as other elements */
      background-color: #A6E0DD; /* White background for consistency */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for subtle depth */
      outline: none;
      transition: border-color 0.3s, box-shadow 0.3s; /* Smooth transition */
      margin: 10px;
    }
    .search-bar:focus {
      border-color: #00796B; /* Matching the color scheme */
      box-shadow: 0 2px 4px rgba(0, 121, 107, 0.2);
      background-color: white;/* Focus shadow effect */
    }
    .search-bar::placeholder {
      color: #aaa
       }
    .no-results{
    list-style: none;
    flex: 1; /* Allow the list to grow and take up available space */
    overflow-y: auto; /* Enable vertical scrolling */
    scrollbar-width: thin; /* For Firefox: thinner scrollbar */
    scrollbar-color: #ccc transparent;
    border-top-left-radius:30px;
    border-top-right-radius: 30px;
    background-color: #fff;
    padding: 10px;
  }
    .no_results{
      color: gray;
      text-align: center;
    }
    .list-icon-container {
      position: absolute;
      left: 10px; /* Position the search icon inside the input */
      top: 50%;
      transform: translateY(-50%);
    }
    .list-icon {
      width: 18px;
      height: 18px;
      opacity: 0.7;
    }
  //   .lo-list-title {
  //   text-align: center;
  //   color: white;
  //   margin-bottom: 10px;
  //   padding: 15px;
  //   height: 50px;
  // }
  .lo-list {
    list-style: none;
    flex: 1; /* Allow the list to grow and take up available space */
    overflow-y: auto; /* Enable vertical scrolling */
    scrollbar-width: thin; /* For Firefox: thinner scrollbar */
    scrollbar-color: #ccc transparent;
    border-top-left-radius:30px;
    border-top-right-radius: 30px;
    background-color: #fff;
    padding: 10px;
  }
  .lo-list::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar for WebKit browsers */
  }
  .lo-list::-webkit-scrollbar-thumb {
    background-color: #ccc; /* Color of the scrollbar thumb */
    border-radius: 4px;
  }
  .lo-list-item {
    width: 90%;
    background: white;
    margin: 10px auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 30px 30px 0 0;
    color: #6C6C6C;
    overflow: hidden;
    z-index: -1;
  }
  .lo-header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .lo-info {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .lo-dropdown-icon {
    font-size: 18px;
    color: #00796B;
  }
  .lo-dropdown-content {
    padding: 10px;
    background: #eee;
    color: #004D40;
    display : none;
    &.show{
      display : block;
    }
  }
    .dots{
    height: 40px;
    }
    .loading-message{
    height: 30px;
    width: 30px;
    display: block;
    margin: auto;
    color: grey;
    }
    .plus{
    font-size: 40px;
    color: rgb(26, 24, 24)
    }
  .add{
    background-color: #21C3BC;
    opacity: 0.9;
    font-weight: bold;
    width: 60px;
    height: 60px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    display: flex; /* Use flexbox for alignment */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    text-align: center;
    position: fixed; /* Fixed positioning */
    bottom: 90px; /* Distance from the bottom */
    right: 40px; /* Distance from the right */
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), /* Slight shadow below */
              0 -4px 6px rgba(0, 0, 0, 0.1), /* Slight shadow above */
              4px 0 6px rgba(0, 0, 0, 0.1), /* Slight shadow on the right */
              -4px 0 6px rgba(0, 0, 0, 0.1);
  }
  /* Delete button styling */
.delete{
  height: 25px;
  margin-right: 5px;
}
.edit{
  height: 25px;
  margin-right: 5px;
  color: green;
}
  .popup-menu{
  background-color: beige
  }
.list-icons{
  height: 20px;
 // background-color: #21C3BC;
}
.list-icon-containers{
 // background-color: #21C3BC;
  margin-right: 10px;
  border-radius: 5px;
  padding: 2px;
}
/* .item-title{
  font-weight: bold;
} */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dim background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.popup-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: popup 0.3s ease-in-out;
}
@keyframes popup {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.form-container button {
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.form-container button:hover {
  background-color: #F0F0F0;
}
.mapCounter{
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: gray;
  text-align: center;
  color: #fff;
  margin-right: 5px;
  padding: 2px;
}
`
export default Wrapper;






