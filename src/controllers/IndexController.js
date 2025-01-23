// Index View -----------------------------------------------------------------

exports.indexView = (request, response) => {
      
    const viewData = { 
        message: 'NodePay',
        pageTitle: 'NodePay Pagamentos' 
    }

    response.render('index', viewData);
}