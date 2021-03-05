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
