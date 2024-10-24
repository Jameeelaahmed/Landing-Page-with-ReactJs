import classes from './SecondaryComponent.module.css'
export default function SecondaryComponent() {
    return (
        <>
            <div className={classes.landing}>
                <div className={classes.overlay}></div>
                <p>Let’s work together</p>
                <h1 dir='ltr'>Need a successful projects?
                </h1>
                <button>Estemate Project</button>
            </div>
        </>
    )
}