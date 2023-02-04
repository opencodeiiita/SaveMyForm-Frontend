import { getAccessToken, get } from "../API";
import { AppbarContext } from "../../context";
import { useContext } from "react";

export async function getUserDashboard() {
    return await get("/user/dashboard").then((data) => {
      data?.data?.data?.projects.forEach((date) => {
        let iostr = date.date_created;
        let tempDate = new Date(iostr).toDateString().slice(4);
        date.date_created = tempDate.slice(0, 6) + "," + tempDate.slice(6);
      });
      return data?.data?.data;
    });
}

export async function getProjectData(id) {
  return await get(`/project/dashboard/${id}`).then((data) => {
    data?.data?.data?.forms?.forEach((form) => {
      let iostr = form.date_created;
      let iostr2 = form.last_updated;
      let tempDate = new Date(iostr).toDateString().slice(4);
      let tempDate2 = new Date(iostr2).toDateString().slice(4);
      form.date_created = tempDate.slice(0, 6) + "," + tempDate.slice(6);
      form.last_updated = tempDate2.slice(0, 6) + "," + tempDate2.slice(6);
    });
    return data?.data?.data;
  });
}
