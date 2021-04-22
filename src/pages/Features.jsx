import  image1 from '../assets/images/main/features/section3_1.png';
import image2 from '../assets/images/main/features/section3_2.png';
import image3 from "../assets/images/main/features/section3_3.png";
import image4 from "../assets/images/main/features/section3_4.png";
import btn_arrow from "../assets/images/btn_arrow.svg";

export const FeaturesPage = () => {
    return (
        <section id="features" className="container features">
            <div className="features_intro">
                <h2 className="features_intro_title">Features</h2>
                <p className="features_intro_text">
                    Some of the features and advantages that we provide for
                    those of you who store data in this Data Warehouse.
                </p>
            </div>
            <div className="features_list">

                <article className="features_item">
                    <img className="img_feature" src={image1} aria-hidden="true"
                         alt=""/>
                        <div className="feature_content">
                            <h3 className="feature_title">Search Data</h3>
                            <p className="feature_text">
                                Don’t worry if your data is very large, the Data Warehoue
                                provides a search engine, which is
                                useful for making it easier to find data effectively saving time.
                            </p>
                            <a className="feature_link" href="#">
                                <span className="feature_link_text">Learn more</span>
                                <img className="feature_link_img" src={btn_arrow}/>
                            </a>
                        </div>
                </article>
                <article className="features_item">
                    <img className="img_feature" src={image2} aria-hidden="true"
                         alt=""/>
                        <div className="feature_content">
                            <h3 className="feature_title">24 Hours Access</h3>
                            <p className="feature_text">
                                Access is given 24 hours a full morning to night and
                                meet again in the morning, giving you comfort when
                                you need data when urgent.
                            </p>
                            <a className="feature_link" href="#">
                                <span className="feature_link_text">Learn more</span>
                                <img className="feature_link_img" src={btn_arrow}/>
                            </a>
                        </div>
                </article>

                <article className="features_item">
                    <img className="img_feature" src={image3} aria-hidden="true"
                         alt=""/>
                        <div className="feature_content">
                            <h3 className="feature_title">Print Out</h3>
                            <p className="feature_text">
                                Print out service gives you convenience if someday
                                you need print data, just edit it all and just print it.
                            </p>
                            <a className="feature_link" href="#">
                                <span className="feature_link_text">Learn more</span>
                                <img className="feature_link_img" src={btn_arrow}/>
                            </a>
                        </div>
                </article>
                <article className="features_item">
                    <img className="img_feature" src={image4} aria-hidden="true"
                         alt=""/>
                        <div className="feature_content">
                            <h3 className="feature_title">Security Code</h3>
                            <p className="feature_text">
                                Data Security is one of our best facilities. Allows for your files
                                to be safer. The file can be secured with a code or password that
                                you created, so only you can open the file.
                            </p>
                            <a className="feature_link" href="#">
                                <span className="feature_link_text">Learn more</span>
                                <img className="feature_link_img" src={btn_arrow}/>
                            </a>
                        </div>
                </article>

            </div>
        </section>
    );
}