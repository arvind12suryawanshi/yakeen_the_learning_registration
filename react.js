function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    const errorMessage = document.getElementById('error-message');
  
    if (!name || !email || !phone) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Please fill in all the required fields.';
      return false;
    } else {
      errorMessage.style.display = 'none';
      return true;
    }
  }
  








  const text = "Register Now";
const heading = document.getElementById("register-heading2");

let charIndex = 0;

function animateText() {
  heading.textContent = text.substring(0, charIndex);
  charIndex = (charIndex + 1) % (text.length + 1);
  setTimeout(animateText, charIndex === 0 ? 2000 : 150);
}

animateText();


















function enrollCourse() {
    const selectedCourse = document.getElementById('course').value;
    if (!selectedCourse) {
      alert('Please select a course.');
      return;
    }
  
    // You can add your logic to redirect the user to the specific course page
    // or perform any other action based on the selected course.
    switch (selectedCourse) {
      case 'ChatGPT':
        window.location.href = 'https://example.com/chatgpt-course';
        break;
      case 'Freelancing':
        window.location.href = 'https://example.com/freelancing-course';
        break;
      default:
        alert('Invalid course selection.');
        break;
    }
  }
  















  function showPrice(course) {
    const coursePriceElement = document.getElementById('coursePrice3');
  
    if (course === 'chatgpt') {
      coursePriceElement.textContent = 'Course Price: $100';
    } else if (course === 'freelancing') {
      coursePriceElement.textContent = 'Course Price: $150';
    }
  }
  
  function redirectToPaymentGateway() {
    // Replace 'payment_gateway_api_url' with the actual API URL for the payment gateway
    const paymentGatewayAPIURL = 'payment_gateway_api_url';
    document.getElementById('registrationForm3').setAttribute('action', paymentGatewayAPIURL);
  }
  