import React from 'react';

class Header extends React.Component {

    render() {

        return <h1 className='mainHeader' style={styles.header}>my toDo Application</h1>
    }

}

const styles = {
    header: {
        color: "grey",
        margin: 'auto',
        fontWeight: 600
    }
}

export default Header