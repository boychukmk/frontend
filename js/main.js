
document.addEventListener('DOMContentLoaded', function() {
  const responceTrigger = document.querySelector('.responce-trigger');
  const responceBox = document.querySelector('.unit-responce');
  responceTrigger.addEventListener('click', function() {
    responceBox.classList.add('active');
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  const bannerHeader = document.querySelector('.banner-text');
  const textToAdd = ' Вітаємо з прийдешніми святами! Щастя вам, здоровля, многая літа, будьте щасливі.                      ' +
    'А тепер анекдот: Іде по місту конячка... Дивиться у магазині продають соломʼяні капелюхи. Думає : "зайду подивлюсь!".' +
    ' Заходить дивиться, каже дайте мені один будь ласка. Продавець питає: "Вам великий?". А конячка йому :"Та ні, маленький - я на дієті".' +
    ' Ірина Аркадіївна, як вам анекдот?)';
  const characters = textToAdd.split('');
   let index = 0;
  function addText() {
    bannerHeader.textContent += characters[index];
    index++;

    if (index < characters.length) {
      setTimeout(addText, 50); // Затримка між символами
    }
  }
  addText();
});








