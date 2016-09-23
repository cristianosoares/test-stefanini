app = angular.module("appStefanini", []);
app.controller("MenuController", function($scope) {
  $scope.menus = [
  {
    title: "home", 
    action: "#"  
  },
  {
    title: "about", 
    action: "#"
  },
  {
    title: "services", 
    action: "#"  
  },
  {
    title: "portfolio", 
    action: "#"
  }
]
$scope.menusrigth = [
  {
    title: "team", 
    action: "#"  
  },
  {
    title: "shop", 
    action: "#"
  },
  {
    title: "blog", 
    action: "#"  
  },
  {
    title: "contacts", 
    action: "#"
  }
]

});


app.controller("BoxController", function($scope) {
$scope.boxOne = [
  {
    title: "Latest Project",
    project:"Macbook Air Mockup Free PSD Graphics",
    description:"Download Macbook Air Mockup Free PSD Graphics. A High Quality beautiful Macbook Air Mockup on a wooden desk with other elements such as coffee cup, notebook, iphone etc for free download.",
    more:"Konw more"
  }
]
$scope.boxTwo = [
  {
    title: "Design Projects",
    project:"PSD Files and Resources for Free Download",
    description:"Free PSD Graphics, Photoshop Templates, PSD GUI and PSD icons for your web and graphic design project. Free PSD Graphics, Photoshop Templates, PSD GUI and PSD icons for your web and graphic design project.",
    more:"View all"
  }
]
$scope.boxThree = [
  {
    title: "Featured Project",
    project:"Professional Business Website Template Free PSD",
    description:"Here is a free Exclusive PSD of a creative website design that designers and small agencies who want promote themselves can use. Professional Business Website Template Free PSD is very attractive, professional such as good catchy call to action buttons, clear headlines.",
    more:"Konw more"
  }
]
$scope.boxFour = [
  {
    title: "Protein Jar Packaging",
    project:"Protein Jar Packaging Mockup Free PSD Graphics",
    description:"Download Protein Jar Packaging Mockup Free PSD Graphics. A Realistic Mockup for protein jar design to display your design in a more efficient way on this Protein Jar Mockup Free PSD Graphics. Includes a special layer for your design Easy to Change and Customize Jar label within smart Object.",
    more:"Konw more"
  }
]

});


app.controller("FooterController", function($scope) {
$scope.colInfoFooter = [
  {
    descriptionlineone:"Vivamus viverra, ligula non tincidunt pulvinar, augue est sagittis leo, id feugiat enim lorem quis nisl. Quisque ac arcu egestas, convallis risus vitae, gravida enim.",
    descriptionlinetwo:"Praesent iaculis ut lacus a mattis. Nam interdum, nulla id sodales viverra, quam eros commodo est, quis aliquam lectus.",
    textlink:"Read more"
  }
]

$scope.opts = [
        {
            class:'ico-subscribe',
            title: 'Subscribe',
            subtitle:'to RSS Feed'
        },
        {
            class:'ico-twitter',
            title: 'Follow Us',
            subtitle:'on Twitter'
        },
        {
            class:'ico-facebook',
            title: 'Find Us',
            subtitle:'on Facebook'
        },
        {
            class:'ico-google',
            title: 'Find Us',
            subtitle:'on Google +'
        },
        {
            class:'ico-pinteret',
            title: 'Follow Us',
            subtitle:'on Pinterest'
        },
        {
            class:'ico-dribbble',
            title: 'Follow Us',
            subtitle:'on Dribbble'
        }
];

$scope.posts = [
        {
            class:'img-postone',
            title: 'Your Title Blog Here',
            content:'Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu...',
            date:'21 December, 2017'
        },
        {
            class:'img-posttwo',
            title: 'Your Title Blog Here',
            content:'Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu...',
            date:'21 December, 2017'
        },
        {
            class:'img-postthree',
            title: 'Your Title Blog Here',
            content:'Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu...',
            date:'21 December, 2017'
        }
];

$scope.tags = [{title: 'awesome'},{title: 'beautiful'},{title: 'mass'},{title: 'flat design'},{title: 'ios'},{title: 'themforest'}];

$scope.links = [{title: 'Web Design Resource'},{title: 'Help Center'},{title: 'Download Center'},{title: 'User Account'},{title: 'Support Forum'},{title: 'Shortcodes Page Ready'}];

});

