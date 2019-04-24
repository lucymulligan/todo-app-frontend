import React from 'react';

class Header extends React.Component {

    render() {

        return <h1 style = {styles.header}>my toDo Application</h1>
    }

}

const styles =  {
    header : {
        color: "teal"
    }
}

export default Header