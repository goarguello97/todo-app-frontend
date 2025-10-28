import { useContext, useEffect } from "react";
import CardComponent from "../components/Card";
import { TaskContext } from "../context/taskContext";
import { UserContext } from "../context/userContext";

const Home = () => {
  const { setLoading, me, user } = useContext(UserContext);
  const { getAllTasks } = useContext(TaskContext);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    if (user) {
      getAllTasks(user.id);
      return;
    }
    me();
  }, []);
  return <CardComponent />;
};

export default Home;
