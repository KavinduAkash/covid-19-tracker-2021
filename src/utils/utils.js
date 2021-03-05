import {Circle, Popup} from "react-leaflet";

const casesTypeColors = {
    cases: {
        hex:"#CC1034",
        rgb: "rgb(204, 16, 52)",
        half_op: "rgba(204, 16, 52, 0.5)",
        multiplier: 800
    },
    recovered: {
        hex:"#7dd71d",
        rgb: "rgb(125, 215, 29)",
        half_op: "rgba(124, 215, 29, 0.5)",
        multiplier: 1200
    },
    deaths: {
        hex:"#fb4443",
        rgb: "rgb(251, 68, 67)",
        half_op: "rgba(251, 68, 67, 0.5)",
        multiplier: 2000
    }
};

export const prepare_line_chart_data = (data) => {
    let labels = [];
    let data_set = [];
    Object.keys(data).map((e, i)=>{
        labels.push(e);
        data_set.push(data[e]);
    });
    let result = {
        labels: labels,
        data: data_set
    };
    return result;
};

export const showDataOnMap = (data, caseType="cases") => {
    data.map(country=>{
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[caseType].hex}
            fillColor={casesTypeColors[caseType].hex}
            radius={
                Math.sqrt(country[caseType])*casesTypeColors[caseType].multiplier
            }
        >
            <Popup>
                <h1>I A POPUP</h1>
            </Popup>
        </Circle>
    });
    return null;
};
