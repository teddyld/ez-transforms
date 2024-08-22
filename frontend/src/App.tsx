import axios from "axios";
import React from "react";

function App() {
  const [message, setMessage] = React.useState("");
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/data");
    return response.data;
  };

  React.useEffect(() => {
    fetchAPI().then((data) => {
      setMessage(data.message);
    });
  }, []);

  return <div>ez-transforms {message}</div>;
}

export default App;
