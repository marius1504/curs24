export const Bio = (props) => {
    const checkHobbies = ["Java", "React"];
    return(
        <div>
            <h4>{'Birth date: ' + props.birthday }</h4>
            <p>{'Description:' + props.description}</p>
            <p>{'Hobbies:' + props.hobbies}</p>
            <p>{'PROGRAMMER:' + props.hobbies.some(el => checkHobbies.includes(el))}
            </p>
        </div>
    );
  };