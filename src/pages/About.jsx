import img from "../assets/images/main/section2.png";

export const AboutPage = () => {
    return (
        <section className="container privilege">
            <img src={img} aria-hidden="true" alt=""/>
            <div className="privilege_content">
                <h2 className="privilege_title">
                    We are a high-level data storage bank
                </h2>
                <p className="privilege_text">
                    The place to store various data that you can access at any time through the internet and where
                    you can
                    carry it.
                    This very flexible storage area has a high level of security.
                    To enter into your own data you must enter the password that you
                    created when you registered in this Data Warehouse.
                </p>
            </div>
        </section>
    );
}