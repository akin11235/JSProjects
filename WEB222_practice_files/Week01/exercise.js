var csvData = `0134134,John Smith,555-567-2341,62 inches
0134135   ,    June    Lee    ,  5554126347 ,        149 cm
0134136,       Kim Thomas       , 5324126347, 138cm`;

function PhoneNumber(value) {
    this.value = value;
}

PhoneNumber.prototype.getAreaCode = function(){
    let phoneNumber = this.value;

    let matches = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/);

    if(matches) {
        // store the area code in place of the phone number
        return matches[1];
    }
    return phoneNumber;
}


function Height(inches){
    this.inches = inches;
}
Height.parse = function(value){
let inches;
};


function splitIntoRows(s){
    return s.split(/\r?\n/);
}

function removeExtraWhiteSpace(s){
    return s.replace(/\s+/, ' ');
}

function extractAreaCode(phoneNumber){
    let matches = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/);

    if(matches) {
        // store the area code in place of the phone number
        return matches[1];
    }
    return phoneNumber;
}

function normalizeHeight(height){
    // height in inches
    if(height.endsWith('inches')){
        return height;
    }

    // get height in cm
    let cm = parseFloat(height)
    let inches = cm * 0.39;

    // xx inches
    return `${inches} inches`;
}


function rowToFields (row){
    // split on , with or without whitespace on either side
    let fields = row.split(/\s*,\s*/);

    // Remove extra white space from the name fields
    fields[1] = removeExtraWhiteSpace(fields[1]);

      // extract area code
    fields[2] = extractAreaCode(fields[2]);

    // Normalize height to inches and format as a string
    fields[3] = normalizeHeight(fields[3]);

    return fields.join(',');
}

function processCSV(csv){
    // step 1 - Break csv into rows
    let rows = splitIntoRows(csv);

    // Step 2 - split all rows into an array of fields
    // let data = [];
    let data = rows.map(rowToFields);

    // let data = rows.map((row) => rowToFields(row));

    // for(let row of rows){
    //     let fields = rowToFields(row);
    //     data.push(fields);
    // }

    // for(let i = 0; i < rows.length; i++){
    //     let row = rows[i];
    //     let fields = rowToFields(row);
    //     // Add this set of fields to the data list
    //     data.push(fields);
    //     // console.log(fields);
    // }

    return data.join('\n');
    // console.log(data);
}


let processed = processCSV(csvData);
console.log(csvData);
console.log(processed);