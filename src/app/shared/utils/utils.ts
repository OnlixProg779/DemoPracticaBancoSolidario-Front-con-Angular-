
// import * as dymod from '@citypantry/dymo-sdk'


export function toBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    })
}

export function formatDate(date: Date) {
    date = new Date(date);
    const formato = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const [
        { value: month }, ,
        { value: day }, ,
        { value: year }
    ] = formato.formatToParts(date);

    return `${year}-${month}-${day}`;
}

export function formatDate2(date: Date) {
    date = new Date(date);
    const formato = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const [
        { value: month }, ,
        { value: day }, ,
        { value: year }
    ] = formato.formatToParts(date);

    return `${day}/${month}/${year}`;
}

export function JsonToArrayBncoLoja(data: any[]): any[] {
    var tableData: any[] = [];

    data.forEach(element => {
        if (element.Transaccion != 'Saldo Inicial') {
            tableData.push([`${formatDate2(new Date(element.Fecha.split(" ")[0]))}`, `${element.Oficina}`, `${element.Referencia}`, `${element.Transaccion}: ${element.Rubro} - ${element.Concepto}`, `${element.Debitos}`, `${element.Creditos}`, `${element.Saldo}`]);
        }

    });

    return tableData;
}

export function printCodeProduct(code: string) {
    var printers = dymo.label.framework.getPrinters();
    if (printers.length == 0) {
        alert("No DYMO printers are installed. Install DYMO printers.");
        return;
    }
    // try {
    // console.log(dymod)

    var result = dymo.label.framework.checkEnvironment();
    if (result.isBrowserSupported) {
        if (result.isFrameworkInstalled) {
            if (dymo.label.framework.init) {
                if (result.isWebServicePresent) {

                    var printerName = "";
                    for (var i = 0; i < printers.length; i++) {
                        // var printers = printers[i].name;
                        console.log(printers[i]);
                        // var option = document.createElement('option');
                        // option.value = printerName;
                        // option.appendChild(document.createTextNode(printerName));
                        // printersSelect.appendChild(option);  
                        var printer = null;
                        if (printers[i].isConnected) {
                            console.log("Impresora ", printers[i].name, " conectada: ok!")

                            printer = printers[i];
                            if (printer.printerType == "LabelWriterPrinter") {
                                printerName = printer.name;
                                break;
                            }

                        } else {
                            console.log("Impresora ", printers[i].name, " DESCONECTADA")
                        }

                    }
                    if (printerName == "") {
                        alert("Status:" + "\nImpresoras: " + printers.length + "\nConectadas de tipo LabelWriterPrinter: 0");
                    }

                    var labelXml = getXmlToPrinter450('product');
                    // var label = dymo.label.framework.openLabelXml(labelXml);

                    // label.setObjectText("codebar", code);
                    // label.setObjectText("QRCode", code);

                    var labelSet = new dymo.label.framework.LabelSetBuilder();
                    labelSet.addRecord().setText("codebar", code).setText("QRCode", code);
                    // Print and get status

                    // label.print(printer.name, null, labelSet.toString());

                    var estado = dymo.label.framework.printLabel2(printer.name, null, labelXml, labelSet.toString());
                    console.log(estado);


                    // dymo.label.framework.getLabelWriterPrinters().
                    //    label.printAndPollStatus(printer.name, null, labelSet.toString(), function(printJob, printJobStatus)
                    //   {
                    //       // output status
                    //       var statusStr = 'Job Status: ' + printJobStatus.statusMessage;

                    //       var result = (printJobStatus.status != dymo.label.framework.PrintJobStatus.ProcessingError 
                    //           && printJobStatus.status != dymo.label.framework.PrintJobStatus.Finished);

                    //       // reenable when the job is done (either success or fail)
                    //       console.log(result);

                    //       //if (!result)
                    //       //    statusStr = '';

                    //       console.log(statusStr);
                    //       console.log(printJob);
                    //       console.log(printJobStatus);


                    //       return result;

                    //   }, 1000);

                } else {
                    alert("isWebServicePresent is false")
                }
            } else {
                console.log("NO INIT PRINTERS")
            }
        } else {
            alert("isFrameworkInstalled is false")
        }
    } else {
        alert("isBrowserSupported is false")
    }

    // console.log("errorDetails: " + result.errorDetails);
    // }
    // catch (e) {
    //     alert(e.message || e);
    // }

}

function getXmlToPrinter450(paperType: string): string {
    var labelXml: string = null;


    if (paperType == 'product') {
        labelXml = '<?xml version="1.0" encoding="utf-8"?>\
        <DieCutLabel Version="8.0" Units="twips">\
            <PaperOrientation>Landscape</PaperOrientation>\
            <Id>Address</Id>\
            <PaperName>30252 Address</PaperName>\
            <DrawCommands>\
                <RoundRectangle X="0" Y="0" Width="1581" Height="5040" Rx="270" Ry="270" />\
            </DrawCommands>\
            <ObjectInfo>\
                <BarcodeObject>\
                    <Name>codebar</Name>\
                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                    <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                    <LinkedObjectName></LinkedObjectName>\
                    <Rotation>Rotation0</Rotation>\
                    <IsMirrored>False</IsMirrored>\
                    <IsVariable>True</IsVariable>\
                    <Text></Text>\
                    <Type>Code128Auto</Type>\
                    <Size>Small</Size>\
                    <TextPosition>Bottom</TextPosition>\
                    <TextFont Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                    <CheckSumFont Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                    <TextEmbedding>None</TextEmbedding>\
                    <ECLevel>0</ECLevel>\
                    <HorizontalAlignment>Center</HorizontalAlignment>\
                    <QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" />\
                </BarcodeObject>\
                <Bounds X="1785.82679847397" Y="209.763782677895" Width="3061.41736881252" Height="1156.53545044029" />\
            </ObjectInfo>\
            <ObjectInfo>\
                <BarcodeObject>\
                    <Name>QRCode</Name>\
                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                    <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                    <LinkedObjectName></LinkedObjectName>\
                    <Rotation>Rotation0</Rotation>\
                    <IsMirrored>False</IsMirrored>\
                    <IsVariable>True</IsVariable>\
                    <Text></Text>\
                    <Type>QRCode</Type>\
                    <Size>AutoFit</Size>\
                    <TextPosition>None</TextPosition>\
                    <TextFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                    <CheckSumFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                    <TextEmbedding>None</TextEmbedding>\
                    <ECLevel>0</ECLevel>\
                    <HorizontalAlignment>Center</HorizontalAlignment>\
                    <QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" />\
                </BarcodeObject>\
                <Bounds X="331" Y="240" Width="1125" Height="1125" />\
            </ObjectInfo>\
        </DieCutLabel>'
    }
    return labelXml;
}

