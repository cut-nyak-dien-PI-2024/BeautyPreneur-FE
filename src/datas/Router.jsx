import Course from "../pages/Kelas";
import TrainingSection from "../pages/DetailCourse";
import Home from "../pages/Home";
import SuccessBuy from "../pages/SuccessBuy";

export default function Router() {
  return [
    {
      name: "home",
      path: "/",
      component: <Home />,
    },
    {
      name: "kursus",
      path: "/kursus",
      component: <Course />,
    },
    {
      name: "detail kursus",
      path: "/kursus/:params",
      component: <TrainingSection />,
    },
    {
      name: "success",
      path: "/success-payment",
      component: <SuccessBuy />,
    },
      /*{
      name: "cart",
      path: "/checkout/:params",
      component: <Cart />,
    },
    {
      name: "glam",
      path: "/glam-on-the-spot",
      component: <GlamOnTheSpot/>,
    },*/
  ];
}
