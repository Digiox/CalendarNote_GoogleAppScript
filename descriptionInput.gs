
// Building first Card with event description input
function description() {
  
  var card = CardService.newCardBuilder();
  card.setHeader(CardService.newCardHeader().setTitle("Ajouter un rappel"));
  var section = CardService.newCardSection()
  var client_Input = CardService.newTextInput()
  .setFieldName("rappel")
  section.addWidget(client_Input)
  //Login action button
  var action = CardService.newAction().setFunctionName('dateInput');
  section.addWidget(CardService.newTextButton().setText('continuer').setOnClickAction(action))
  card.addSection(section)
  return card.build();
}
