function processarTransacaoPix(chavePix, valor, callbackAcao) {
  if (valor <= 0) {
    console.log("Erro: o valor deve ser maior que zero.");
    return;
  }

  return callbackAcao(chavePix, valor);
}

function callbackAcao(chavePix, valor) {
    const status = valor >= 5000 ? "cancelado por fraude" : "aprovado";
    const auditarTransacaoSuspeita =
      valor >= 5000 ? valor : (valor + valor * 0.02) - 5
  const transacao = {
    id: Math.floor(Math.random() * 100000),
    chavePix,
    valor: auditarTransacaoSuspeita,
    status,
    data: new Date().toLocaleTimeString(),
  };
  
  console.log("Informações de transação", transacao);
}

function enviarWebhookAssincrono(transacao) {
    setTimeout(() => {console.log(`A transacao de ${transacao} foi finalizada`)},2000)
}

enviarWebhookAssincrono(500)