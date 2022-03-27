import React from 'react'

function FancyBorder(prop) {
    // prop.children will turn any elements inside the fancyborder tag into its children
    return (
        <div className={'Fancy-Border Fancy-Border' + prop.color}>
            {prop.children}
        </div>
    )
}

function WelcomeDialog() {
    // everything inside <FancyBorder></FancyBorder> will be its children prop
    return (
        <FancyBorder color="primary">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-msg">
                We are in the Composition vs Inheritance section!
            </p>
        </FancyBorder>

    )
}

export default WelcomeDialog;
