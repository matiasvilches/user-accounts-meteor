// CLIENT
var myLogoutFunc = function() {
  Session.set('nav-toggle', '');
  FlowRouter.go('/');
}

AccountsTemplates.configure(
  {
    confirmPassword: false,
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',
    onLogoutHook: myLogoutFunc
  }
);

AccountsTemplates.addFields([
  {
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    placeholder: 'First Name',
    required: true,
    minLength: 5,
    re: /(?=.*[a-z])(?=.*[A-Z])/,
    errStr: '1 lowercase and 1 uppercase letter required.'
  }, {
    _id: 'profession',
    type: 'select',
    displayName: 'Profession',
    select: [
      {
        text: 'Developer',
        value: 'Developer'
      }, {
        text: 'Designer',
        value: 'Designer'
      }, {
        text: 'Other',
        value: 'Other'
      }
    ]
  }
]);
