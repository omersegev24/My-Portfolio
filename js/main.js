'use strict';


$(document).ready(onInit);

function onInit() {
    renderPortfolio();
    renderModals();
}

function renderPortfolio() {
    var projs = getProjsToDisplay();

    var strHTMLs = projs.map((proj) => {
        var idx = projs.indexOf(proj);
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx}">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-proj img-fluid" src="img/portfolio/${proj.id}-small.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${proj.name}</h4>
                        <p class="text-muted">${proj.title}</p>
                    </div>
                </div>`
    });
    document.querySelector('.projs-portfolio').innerHTML = strHTMLs.join('');
}

function renderModals() {
    var projs = getProjsToDisplay();

    var strHTMLs = projs.map((proj) => {
        var idx = projs.indexOf(proj);
        return `<div class="portfolio-modal modal fade" id="portfolioModal${idx}" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-dismiss="modal">
                                <div class="lr">
                                    <div class="rl"></div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8 mx-auto">
                                        <div class="modal-body">
                                            <h2>${proj.name}</h2>
                                            <p class="item-intro text-muted">${proj.title}.</p>
                                            <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.jpg" alt="">
                                            <p>${proj.desc}</p>
                                            <ul class="list-inline">
                                                <li>Date: January 2020</li>
                                                <li>Client: ${proj.labels[0]}</li>
                                                <li>Category: ${proj.labels[1]}</li>
                                            </ul>
                                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                                            <i class="fa fa-times"></i>
                                            Close Project</button>
                                            <button class="btn btn-info" onclick="window.open(\'${proj.url}\')" type="button">
                                            Check it Out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    });
    document.querySelector('.portfolio-modals').innerHTML = strHTMLs.join('');
}

function onSubmit() {
    var body = $('.msg').val();
    var subject = $('.sub').val();
    var email = $('.email').val();

    if(!body || !subject || !email) return;
    if(!isEmail(email)) return;

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=omersegev@me.com&su=${subject}&body=${body}`, '_BLANK');
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

