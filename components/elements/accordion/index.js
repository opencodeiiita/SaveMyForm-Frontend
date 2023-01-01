export default (props) => {
    if (process.browser) {
        let check = true;
        let a = document.getElementsByClassName("faq_header");
        let b = document.getElementsByClassName("faq_details");
        for (let i = 0; i < a.length; i++) {
            a[i].addEventListener("click", () => {
                if (check) {
                    b[i].style.paddingBottom = "20px";
                    b[i].style.maxHeight = "200px";
                    a[i].style.setProperty("--angle", "45deg");
                } else {
                    b[i].style.paddingBottom = "0px";
                    b[i].style.maxHeight = "0px";
                    a[i].style.setProperty("--angle", "0deg");
                }
                check = !check;
            });
        }
    }
    return (
        <div className="faq_container">
            <div className="faq_header">
                <h1>{props.label}</h1>
                <div className="faq_details">{props.details}</div>
            </div>
        </div>
    );
};
