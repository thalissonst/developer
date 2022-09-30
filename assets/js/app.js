const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//Função que envia o E-mail utilizando a API Formsubmit
function sendEmail() 
{	
	$.ajax({
		url: "https://formsubmit.co/ajax/ead233f36909e54a05e2cff74560fb39",
		method: "POST",
		dataType: "json",
		data: {
			name: $("#name").val(),
			email: $("#email").val(),
			message: $("#message").val(),
			_subject: 'Portfólio - Nova Mensagem',
			_captcha: false
		},
	})
	.done(function(response) 
	{
		if (response.success)
		{
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');

			window.location.href = "https://thalissonst.github.io/developer/thanks";
		} 
		else {
			alert('Opa, ocorreu algum erro ao enviar o formulário. Por favor tente novamente!');
		}
	});
}

