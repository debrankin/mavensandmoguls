/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['557px', '96px', '246px', '33px', 'auto', 'auto'],
                            text: "real world experience",
                            font: ['source-sans-pro, sans-serif', [24, ""], "rgba(166,166,166,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['522px', '95px', '313px', '35px', 'auto', 'auto'],
                            text: "valued opinions",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [24, "px"], "rgba(166,166,166,1)", "400", "none solid rgb(166, 166, 166)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4028,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "left",
                            0,
                            2010,
                            "linear",
                            "${Text}",
                            '557px',
                            '166px'
                        ],
                        [
                            "eid3",
                            "left",
                            2010,
                            1999,
                            "linear",
                            "${Text}",
                            '166px',
                            '-261px'
                        ],
                        [
                            "eid4",
                            "left",
                            2031,
                            1997,
                            "linear",
                            "${Text3}",
                            '522px',
                            '229px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mm-header-animate_edgeActions.js");
})("EDGE-12561176");
