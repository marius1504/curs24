import React from "react";
import "./App.css";
import LogoComponent from "./LogoComponent";
import {Badge} from "./Badge";

const badges = [
    {
        firstName: "Johhny",
        lastName: "Depp",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMJf32XCdIMPR005aLZbkk5TldBubjW2CfA&usqp=CAU",
        birthday: "06-06-1963",
        description: "American actor and musician who was known for his eclectic and unconventional film choices. ",
        hobbies: ["Playing guita", "Watching Cartoons", " Collecting dolls and guns"]
    },
    {
        firstName: "Tommy",
        lastName: "Williams",
        img: "https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg",
        birthday: "16-11-1988",
        description: "Java developer who tries to learn React",
        hobbies: ["Java", "React", "Football"]
    },
    {
        firstName: "Tommy2",
        lastName: "Williams2",
        img: "https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg",
        birthday: "15-09-2004",
        description: "A student who tries to become a fullstack developer",
        hobbies: ["Music", "React", "Reading"]
    }
];

class App extends React.Component {
    render() {
      return (
          <div id="container">
            <LogoComponent/>
              {badges.map(e => (
                  <Badge
                      firstName= {e.firstName}
                      lastName={e.lastName}
                      avatarImage={e.img}
                      birthday = {e.birthday}
                      description = {e.description}
                      hobbies = {e.hobbies}
                  />
              ))}
          </div>
      );
    }
  }
export default App;
