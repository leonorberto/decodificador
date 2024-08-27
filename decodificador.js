document.getElementById('btCriptografar').addEventListener('click', function() {
    let texto = document.getElementById('input-texto').value;
    let textoCriptografado = criptografar(texto);
    document.getElementById('output-texto').textContent = textoCriptografado;
    document.getElementById('idresult').classList.remove('none')
    document.getElementById('img_menino').classList.add('none')
    document.getElementById('msg_n_encontrada').classList.add('none')
    document.getElementById('digite_um_texto').classList.add('none')
    document.getElementById('input-texto').value=""
});

document.getElementById('btDescriptografar').addEventListener('click', function() {
    let texto = document.getElementById('input-texto').value;
    let textoDescriptografado = descriptografar(texto);
    document.getElementById('output-texto').textContent = textoDescriptografado;
    document.getElementById('idresult').classList.remove('none')
    document.getElementById('img_menino').classList.add('none')
    document.getElementById('msg_n_encontrada').classList.add('none')
    document.getElementById('digite_um_texto').classList.add('none')
    document.getElementById('input-texto').value=""
});

document.getElementById('idCopiar').addEventListener('click', function() {
    let texto = document.getElementById('output-texto').innerText;
    navigator.clipboard.writeText(texto);
});

function criptografar(texto) {
    // Verifica se o texto está em letras minúsculas e sem caracteres especiais
    if (!/^[a-z\s]*$/.test(texto)) {
        return "Erro: Use apenas letras minúsculas e sem acentos.";
    }

    // Substitui as letras conforme as regras de criptografia
    let textoCriptografado = texto.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");
    return textoCriptografado;
}

function descriptografar(texto) {
    // Substitui as chaves de criptografia de volta para as letras originais
    let textoDescriptografado = texto.replace(/enter/g, "e")
                                     .replace(/imes/g, "i")
                                     .replace(/ai/g, "a")
                                     .replace(/ober/g, "o")
                                     .replace(/ufat/g, "u");
    return textoDescriptografado;
}
