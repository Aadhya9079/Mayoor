const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    backgroundColor: "#ffffff",
    width: "100vw",
    alignItems: "center",
    maxWidth: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
  header: {
    backgroundColor: "#20B2AA",
    padding: "20px",
    position: "sticky",
    top: 0,
    width: "100%",
    textAlign: "center",
    zIndex: 1000,
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    boxSizing: "border-box",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    width: "100%",
    maxWidth: "600px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "25px",
    padding: "0px 16px",
    width: "70%",
    maxWidth: "450px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    position: "relative",
  },
  searchBoxActive: {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "300px",
    zIndex: 2000, // Ensures it stays on top
  },
  searchInput: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
  },
  searchInputActive: {
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "left",
  },
  searchIcon: {
    fontSize: "20px",
    color: "#555",
  },
  iconWrapper: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  icon: {
    fontSize: "22px",
    color: "#ffffff",
    cursor: "pointer",
  },
  title: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "8px",
  },
  listContainer: {
    marginTop: "120px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
    height: "calc(100vh - 120px)",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  listItem: {
    color: "black",
    padding: "12px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    fontSize: "16px",
    textAlign: "center",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "100%",
    overflowWrap: "break-word",
    boxSizing: "border-box",
  },
  noResults: {
    textAlign: "center",
    color: "gray",
    fontSize: "16px",
    marginTop: "10px",
  },
};

export default styles;