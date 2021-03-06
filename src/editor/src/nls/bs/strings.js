/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(greška {0})",
    "NOT_FOUND_ERR": "Datoteku/direktorij nije moguće pronaći.",
    "NOT_READABLE_ERR": "Datoteku/direktorij nije moguće čitati.",
    "EXCEEDS_MAX_FILE_SIZE": "Datoteke veće od {0} MB se ne mogu otvoriti u {APP_NAME}.",
    "FILE_EXISTS_ERR": "Datoteka ili direktorij već postoje.",
    "FILE": "datoteka",
    "FILE_TITLE": "Datoteka",
    "DIRECTORY": "direktorij",
    "DIRECTORY_TITLE": "Direktorij",
    "DIRECTORY_NAMES_LEDE": "Nazivi direktorija",
    "FILENAMES_LEDE": "Nazivi datoteka",
    "FILENAME": "Naziv datoteke",
    "DIRECTORY_NAME": "Naziv direktorija",
    "ERROR_OUT_OF_SPACE_TITLE": "Ograničenje veličine projekta je dostignuto",
    "ERROR_PROJECT_SIZE_EXCEEDED": "Ukupna veličina datoteka u vašem projektu je dostigla maksimalno dostupan prostor. Nećete moći dodati nijednu novu datoteku dok ne izbrišete neke od postojećih da oslobodite prostor.",
    "FILE_EXISTS_HEADER": "Datoteka već postoji.",
    "OPEN_DIALOG_ERROR": "Dogodila se greška prilikom prikazivanja dijaloga otvorene datoteke. (greška {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Dogodila se greška prilikom čitanja sadržaja direktorija <span class='dialog-filename'>{0}</span>. (greška {1})",
    "ERROR_OPENING_FILE_TITLE": "Greška pri otvaranju datoteke",
    "ERROR_OPENING_FILE": "Dogodila se greška prilikom pokušaja otvaranja datoteke <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_OPENING_FILES": "Dogodila se greška prilikom pokušaja otvaranja sljedećih datoteka:",
    "ERROR_SAVING_FILE_TITLE": "Greška spremanja datoteke",
    "ERROR_SAVING_FILE": "Dogodila se greška prilikom pokušaja spremanja datoteke <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Greška pri preimenovanju datoteke",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Greška pri preimenovanju direktorija",
    "ERROR_RENAMING_FILE": "Dogodila se greška prilikom pokušaja preimenovanja datoteke <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_DIRECTORY": "Dogodila se greška prilikom pokušaja preimenovanja direktorija <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE": "Greška pri brisanju datoteke",
    "ERROR_DELETING_DIRECTORY_TITLE": "Greška pri brisanju direktorija",
    "ERROR_DELETING_FILE": "Dogodila se greška prilikom pokušaja brisanja datoteke <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY": "Dogodila se greška prilikom pokušaja brisanja direktorija <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "Nevažeći naziv datoteke",
    "INVALID_DIRNAME_TITLE": "Nevažeći naziv direktorija",
    "INVALID_FILENAME_MESSAGE": "Datoteke ne mogu sadržavati rezervisane riječi sistema, završavati s tačkom (.) ili sadržavati bilo koji od sljedećih znakova: <code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "Direktoriji ne mogu sadržavati rezervisane riječi sistema, završavati s tačkom (.) ili sadržavati bilo koji od sljedećih znakova: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Datoteka ili direktorij s nazivom <span class='dialog-filename'>{0}</span> već postoji.",
    "ERROR_CREATING_FILE_TITLE": "Greška pri stvaranju datoteke",
    "ERROR_CREATING_DIRECTORY_TITLE": "Greška pri stvaranju direktorija",
    "ERROR_CREATING_FILE": "Dogodila se greška prilikom pokušaja stvaranja datoteke <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_CREATING_DIRECTORY": "Dogodila se greška prilikom pokušaja stvaranja direktorija <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_MAX_FILES_TITLE": "Greška indeksiranja datoteka",
    "EXT_MODIFIED_TITLE": "Vanjske promjene",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> je promijenjena na disku van {APP_NAME}.<br /><br />Želite li sačuvati datoteku i pisati preko ovih promjena?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> je promijenjena na disku van {APP_NAME}, ali ima nesačuvanih promjena u {APP_NAME}.<br /><br />Koju verziju želite zadržati?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> je izbrisana na disku van {APP_NAME}, ali ima nesačuvanih promjena u {APP_NAME}.<br /><br />Želite li zadržati svoje promjene?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Potvrdi brisanje",
    "CONFIRM_FOLDER_DELETE": "Jeste li sigurni da želite izbrisati ovaj direktorij <span class='dialog-filename'>{0}</span>?",
    "CONFIRM_FILE_DELETE": "Jeste li sigurni da želite izbrisati <span class='dialog-filename'>{0}</span>?",
    "FILE_DELETED_TITLE": "Datoteka izbrisana",
    "DONE": "Gotovo",
    "OK": "U redu",
    "CANCEL": "Otkaži",
    "SAVE_AND_OVERWRITE": "Piši preko",
    "DELETE": "Izbriši",
    "BUTTON_YES": "Da",
    "BUTTON_NO": "Ne",
    "USE_IMPORTED": "Koristi novu datoteku",
    "KEEP_EXISTING": "Zadrži postojeću datoteku",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Nije dostupno Brzo uređivanje za trenutnu poziciju kursora",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS Brzo uređivanje: postavite kursor na jedinstveno ime klase",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS Brzo uređivanje: nepotpuni atribut klase",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS Brzo uređivanje: nepotpuni id atribut",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS Brzo uređivanje: postavite kursor na oznaku, klasu ili id",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS Brzo uređivanje vremenske funkcije: nevažeća sintaksa",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS Brzo uređivanje: postavite kursor na naziv fuknkcije",
    "BUTTON_NEW_RULE": "Novo pravilo",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Brzi dokumenti nisu dostupni za trenutnu poziciju kursora",
    "CMD_FILE_NEW": "Nova datoteka",
    "CMD_FILE_NEW_FOLDER": "Novi direktorij",
    "CMD_FILE_RENAME": "Preimenuj",
    "CMD_FILE_DELETE": "Izbriši",
    "CMD_FILE_DOWNLOAD": "Preuzmi",
    "CMD_CUT": "Isjeci",
    "CMD_COPY": "Kopiraj",
    "CMD_PASTE": "Zalijepi",
    "CMD_SELECT_ALL": "Označi sve",
    "CMD_TOGGLE_QUICK_EDIT": "Brzo uređivanje",
    "CMD_TOGGLE_QUICK_DOCS": "Brzi dokumenti",
    "DND_MAX_SIZE_EXCEEDED": "datoteka prelazi maksimalnu podržanu veličinu: {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "nepodržani tip datoteke",
    "DND_ERROR_UNZIP": "datoteku nije moguće raspakovati",
    "DND_ERROR_UNTAR": "datoteka se ne može ekstraktirati",
    "DND_SUCCESS_UNZIP_TITLE": "Raspakivanje završeno uspješno",
    "DND_SUCCESS_UNTAR_TITLE": "Ekstrakcija završena uspješno",
    "DND_FILE_REPLACE": "Datoteka <span class='dialog-filename'>{0}</span> već postoji. Želite li koristiti novu datoteku ili zadržati postojeću?",
    "IMAGE_FILE_TITLE": "Slikovna datoteka",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} piksela",
    "IMAGE_ALT_TEXT": "Opis slike",
    "IMAGE_FILTERS_TITLE": "Filter slika",
    "IMAGE_FILTER_PINHOLE": "Pinhole",
    "IMAGE_FILTER_SEPIA": "Sepija",
    "IMAGE_FILTER_CONTRAST": "Kontrast",
    "IMAGE_FILTER_VINTAGE": "Vintage",
    "IMAGE_FILTER_SUNRISE": "Izlazak sunca",
    "IMAGE_FILTER_EMBOSS": "Reljefno",
    "IMAGE_FILTER_GLOWING_SUN": "Sija sunce",
    "IMAGE_SAVE_WITH_FILTERS": "Primijeni",
    "IMAGE_RESET_FILTERS": "Otkaži",
    "FONT_FILE": "Datoteka fontova",
    "USE_FONT_INSTRUCTIONS": "Da bi koristili ovaj font, kopirajte i zalijepite ovaj kod u vašu CSS datoteku.",
    "FONT_TYPE_BOLD": "Podebljano",
    "FONT_TYPE_ITALIC": "Iskošeno",
    "FONT_BOLD_HTML_TAG": "Stavite tekst unutar oznake <code>&lt;strong&gt;&lt;/strong&gt;</code>.",
    "FONT_BOLD_CSS_RULE": "Dodajte CSS pravilo <code>font-weight: bold;</code>.",
    "FONT_ITALIC_HTML_TAG": "Stavite tekst unutar oznake <code>&lt;em&gt;&lt;/em&gt;</code>.",
    "FONT_ITALIC_CSS_RULE": "Dodajte CSS pravilo <code>font-style: italic;</code>.",
    "VIDEO_FILE": "Video datoteka",
    "VIDEO_OPTIONS": "Video opcije",
    "VIDEO_CODE_SAMPLE": "Kopirajte i zalijepite ovaj kod  da dodate ovaj video na HTML stranicu",
    "VIDEO_OPTION_SHOW_CONTROLS": "Prikaži video kontrole",
    "VIDEO_OPTION_AUTOPLAY": "Automatski započni reprodukciju videa",
    "VIDEO_OPTION_LOOPING": "Ponovo pokreni video kada završi",
    "VIDEO_OPTION_DISABLE_AUDIO": "Isključi zvuk",
    "AUDIO_FILE": "Zvučna datoteka",
    "AUDIO_OPTIONS": "Opcije zvuka",
    "AUDIO_OPTION_SHOW_CONTROLS": "Prikaži kontrole zvuka (kada je onemogućeno reproduktor zvuka je nevidljiv)",
    "AUDIO_OPTION_AUTOPLAY": "Automatski započni repordukciju zvuka",
    "AUDIO_OPTION_LOOPING": "Ponovo pokreni zvuk kada završi",
    "AUDIO_OPTION_DISABLE_AUDIO": "Pokreni reproduktor zvuka utišan",
    "BINARY_FILE_TITLE": "Datoteka koja se ne može uređivati",
    "BINARY_FILE_CANNOT_EDIT": "Thimble nije siguran kako urediti ovu datoteku!",
    "BINARY_FILE_OPTIONS_TITLE": "Ali možete...",
    "BINARY_FILE_DOWNLOAD": "Preuzeti",
    "BINARY_FILE_OPEN": "Otvoriti u novom tabu",
    "BINARY_FILE_TRY_EDIT": "Pokušati urediti",
    "PDF_FILE_TITLE": "PDF datoteka",
    "INDIVIDUAL_CORNERS": "Pojedinačni uglovi",
    "ALL_CORNERS": "Svi uglovi",
    "PIXEL_UNIT": "piksela",
    "PERCENTAGE_UNIT": "procenata",
    "EM_UNIT": "em jedinica fonta",
    "ALL_SIDE": "Sve strane",
    "INDIVIDUAL_SIDES": "Pojedine strane",
    "SET_PADDING_FOR": "Postavite razmak za",
    "SET_MARGIN_FOR": "Postavite margine za",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Trenutna boja",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Originalna boja",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa format",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex format",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa format",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (Korišteno {1} put)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (Korišteno {1} puta)",
    "CMD_JUMPTO_DEFINITION": "Idi na definiciju",
    "CMD_SHOW_PARAMETER_HINT": "Prikaži savjet parametra",
    "NO_ARGUMENTS": "<bez parametara>",
    "DETECTED_EXCLUSION_TITLE": "JavaScript problem zaključivanja datoteke",
    "CMD_ENABLE_QUICK_VIEW": "Brzi pregled pri prelazu mišem",
    "DOCS_MORE_LINK": "Pročitajte više",
    "UPLOAD_FILES_DIALOG_HEADER": "Prenesite datoteke",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...ili prevucite datoteke ovdje.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "U redu, pustite datoteke!",
    "UPLOADING_INDICATOR": "Prenošenje...",
    "BUTTON_FROM_YOUR_COMPUTER": "Sa vašeg računara...",
    "TAKE_A_SELFIE": "Napravite selfi...",
    "CMD_MOVE_FILE": "Pomaknite u...",
    "PROJECT_ROOT": "Korijen projekta",
    "PICK_A_FOLDER_TO_MOVE_TO": "Izaberite direktorij",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Greška pri micanju",
    "UNEXPECTED_ERROR_MOVING_FILE": "Dogodila se neočekivana greška pri pokušaju pomjeranja {0} na {1}",
    "ERROR_MOVING_FILE_SAME_NAME": "Datoteka ili direktorij s nazivom {0} već postoji u {1}. Razmotrite preimenovanje barem jedne da nastavite.",
    "CONSOLE_TITLE": "Konzola",
    "CONSOLE_TOOLTIP": "Otvori JavaScript konzolu",
    "CONSOLE_CLEAR": "Očisti",
    "CONSOLE_CLEAR_TOOLTIP": "Očisti konzolu",
    "CONSOLE_CLOSE_TOOLTIP": "Zatvori konzolu",
    "CONSOLE_EMPTY_STRING": "Prazan niz",
    "CONSOLE_HELPTEXT": "Za korištenje konzole, dodajte <code>console.log(&quot;Hello World!&quot;);</code> u vašu JavaScript datoteku."
});
