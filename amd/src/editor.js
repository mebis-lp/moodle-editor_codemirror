export const init = (targetid, options) => {
    require(['editor_codemirror/cm6pro-lazy'], (CodeProEditor) => {
        const targetElem = document.getElementById(targetid);
        new CodeProEditor(targetElem, options);
    });
};
