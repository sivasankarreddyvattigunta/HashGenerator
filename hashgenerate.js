function generateHashFromText() {
    const textInput = document.getElementById("text-input").value;
    const selectedAlgorithm = document.getElementById("hash-algorithm").value;
    const hashOutput = document.getElementById("hash-output");

    if (textInput) {
        let hash;
        switch(selectedAlgorithm) {
            case 'sha256':
                hash = CryptoJS.SHA256(textInput).toString();
                break;
            case 'sha1':
                hash = CryptoJS.SHA1(textInput).toString();
                break;
            case 'sha3':
                hash = CryptoJS.SHA3(textInput).toString();
                break;
            case 'md5':
                hash = CryptoJS.MD5(textInput).toString();
                break;
            case 'sha512':
                hash = CryptoJS.SHA512(textInput).toString();
                break;
            case 'sha384':
                hash = CryptoJS.SHA384(textInput).toString();
                break;
            default:
                hash = 'Invalid algorithm selection';
        }

        hashOutput.textContent = `${selectedAlgorithm.toUpperCase()} Hash: ${hash}`;
    } else {
        hashOutput.textContent = "Please enter text to generate a hash.";
    }
}

function generateHashFromFile() {
    const fileInput = document.getElementById("file-input");
    const selectedAlgorithm = document.getElementById("hash-algorithm").value;
    const hashOutput = document.getElementById("hash-output");

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fileContent = event.target.result;
            let hash;
            switch(selectedAlgorithm) {
                case 'sha256':
                    hash = CryptoJS.SHA256(fileContent).toString();
                    break;
                case 'sha1':
                    hash = CryptoJS.SHA1(fileContent).toString();
                    break;
                case 'sha3':
                    hash = CryptoJS.SHA3(fileContent).toString();
                    break;
                case 'md5':
                    hash = CryptoJS.MD5(fileContent).toString();
                    break;
                case 'sha512':
                    hash = CryptoJS.SHA512(fileContent).toString();
                    break;
                case 'sha384':
                    hash = CryptoJS.SHA384(fileContent).toString();
                    break;
                default:
                    hash = 'Invalid algorithm selection';
            }
            hashOutput.textContent = `${selectedAlgorithm.toUpperCase()} Hash: ${hash}`;
        };
        reader.readAsText(file);
    } else {
        hashOutput.textContent = "Please select a file to generate a hash.";
    }
}
