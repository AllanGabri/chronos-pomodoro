import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import React from "react";

export function MainForm() {
    const [taskName, setTaskName] = React.useState('');


    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('deu certo');
    }


    return(
      <form onSubmit={ handleCreateNewTask} className='form' action="">
                    <div className="formRow">
                        <DefaultInput 
                        labelText='task' 
                        id='meuInput' 
                        type='text' 
                        placeholder='Digite algo' 
                        disabled 
                        defaultValue='Valor preenchido'
                        value= {taskName}
                        onChange = {(e) => setTaskName(e.target.value)}
                        />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles/>
                    </div>

                    <div className="formRow">
                       <DefaultButton
                       icon={<PlayCircleIcon/>} 
                       color= 'green'/>
                    </div>
                </form>
    );
}