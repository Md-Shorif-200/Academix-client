import Loading from "../../Common/Loading";
import useRole from "../../Hooks/useRole";
import RejectionMeassage from "./RejectionMeassage";

import TeacherConfirmation from "./TeacherConfirmation";
import TeachOnApplyForm from "./TeachOnApplyForm";

const TeachOnPage = () => {
  const [data, isLoading] = useRole();
  const status = data?.status;



  return (
    <div>

            


      {status === "accepted" ? 
      <>
      <TeacherConfirmation></TeacherConfirmation>
      </> :
       status === "rejected" ? 
       <>
        <RejectionMeassage></RejectionMeassage>
       </> :
        <>
        <TeachOnApplyForm></TeachOnApplyForm>
        </>}


    </div>
  );
};

export default TeachOnPage;
