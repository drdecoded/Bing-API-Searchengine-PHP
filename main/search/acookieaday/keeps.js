// obtain cookieconsent plugin
var cc = initCookieConsent();

// example logo
var logo = '<img src="./assets/images/favicon.png" alt="Logo" loading="lazy" style="margin-left: -4px; margin-bottom: -5px; height: 35px">';
var cookie = '🍪';

// run plugin with config object
cc.run({
    current_lang : 'de',
    autoclear_cookies : true,                   // default: false
    cookie_name: 'cc_cookie',             // default: 'cc_cookie'
    cookie_expiration : 365,                    // default: 182
    page_scripts: true,                         // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    force_consent: false,
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: "/",                        // default: root
    // cookie_same_site: "Lax",
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'box',                      // box,cloud,bar
            position: 'bottom right',           // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'box',                      // box,bar
            // position: 'left',                // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    languages: {
        'de': {
            consent_modal: {
                title: cookie + ' Wir verwenden Cookies! ',
                description: 'Hi, diese Website verwendet essentielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Zustimmung gesetzt werden. <button type="button" data-cc="c-settings" class="cc-link">Zur Auswahl</button>',
                primary_btn: {
                    text: 'Alle akzeptieren',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Alle ablehnen',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'Einstellungen speichern',
                accept_all_btn: 'Alle akzeptieren',
                reject_all_btn: 'Alle ablehnen',
                close_btn_label: 'Schließen',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Ablauf'},
                    {col4: 'Beschreibung'}
                ],
                blocks: [
                    {
                        title: 'Verwendung von Cookies 📢',
                        description: 'Wir verwenden Cookies, um die grundlegenden Funktionen der Website zu gewährleisten und um ihr Online-Erlebnis zu verbessern. Du kannst für jede Kategorie wählen, ob du dich ein- oder austragen möchtest. Weitere Einzelheiten zu Cookies und anderen sensiblen Daten findest du in unserer <a href="#" class="cc-link">Datenschutzerklärung</a>.'
                    }, {
                        title: 'Notwendige Cookies',
                        description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren unserer Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table: [
                            {
                                col1: 'darkmode',
                                col2: 'blog.qoolar.org',
                                col3: '24 Stunden',
                                col4: 'Speicherung der ausgewählten Darkmode-Option',
                                is_regex: true
                            },
                        ]
                    }, {
                        title: 'Leistungs- und Analyse-Cookies',
                        description: 'Diese Cookies ermöglichen es der Website, sich an die von dir in der Vergangenheit getroffenen Auswahlen zu erinnern',
                        toggle: {
                            value: 'analytics',     // there are no default categories => you specify them
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: 'darkmode',
                                col2: 'blog.qoolar.org',
                                col3: '24 Stunden',
                                col4: 'Speicherung der ausgewählten Darkmode-Option',
                                is_regex: true
                            },
                        ]
                    }, {
                        title: 'Weitere Informationen',
                        description: 'Hast du Fragen? Dann nehme jederzeit Kontakt mit uns auf <a class="cc-link" href="#">Kontakt</a>.',
                    }
                ]
            }
        }
    }

});
