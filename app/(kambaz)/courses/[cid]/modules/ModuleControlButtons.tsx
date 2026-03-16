import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa"; 
import { FaPencil } from "react-icons/fa6"; 

export default function ModuleControlButtons({ isStudent, moduleId, deleteModule, editModule }: 
  { isStudent: boolean; moduleId: string; deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void }) { 
  return (
    <div className="float-end">
      <FaPencil onClick={() => !isStudent && editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => !isStudent && deleteModule(moduleId)}/> 
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}