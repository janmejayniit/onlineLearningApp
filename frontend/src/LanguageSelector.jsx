import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    
    const { i18n ,t} = useTranslation();

    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    };

    return (
        <div className="row">
            <div className="col-md-9"></div>
            <div className="col-md-3">
                {/*<label htmlFor="language-select">Choose Language:</label>*/}
                <select id="language-select" className="form-control form-control-sm" onChange={handleLanguageChange}>
                    <option>{t("Choose Language")}</option>
                    <option value="en">English</option>
                    <option value="sn">Sanskrit</option>
                    <option value="hn">Hindi</option>
                    <option value="tu">Telegu</option>
                </select>
            </div>

        </div>
    );
};

export default LanguageSelector;
