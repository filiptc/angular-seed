'use strict';

/* Providers */


// Demonstrate how to register providers
// In this case it is a simple model provider.
// This could be used as a model


angular.module('demo').provider('users', function() {
    // In the provider function, you cannot inject any
    // service or factory. This can only be done at the
    // "$get" method.

    // Mock
    this.users = [
        {'name': 'Morten Bak', 'country': 'Spain'},
        {'name': 'فروهر مدیری اصل', 'country': 'Finland'},
        {'name': 'Rožika Veseljak', 'country': 'Belgium'},
        {'name': 'Václav Pech', 'country': 'Sweden'},
        {'name': 'František Niedoba', 'country': 'New Zealand'},
        {'name': '姿君 麥', 'country': 'Hungary'},
        {'name': 'Tanguy Routhier', 'country': 'Australia'},
        {'name': 'Ludvig Slette', 'country': 'Austria'},
        {'name': 'Fanny Samaniego', 'country': 'Canada'},
        {'name': 'Илларион Харламов', 'country': 'Australia'},
        {'name': 'Donglu T\'an', 'country': 'Germany'},
        {'name': 'Raimond Værnes', 'country': 'Sweden'},
        {'name': 'Ella Unaipon', 'country': 'Brazil'},
        {'name': 'Freddie Løkke', 'country': 'Slovenia'},
        {'name': 'Anka Michalska', 'country': 'Australia'},
        {'name': 'Rajmund Szôlôsy', 'country': 'France'},
        {'name': 'Kimi Holm', 'country': 'Brazil'},
        {'name': 'Kende Boross', 'country': 'United States'},
        {'name': 'Jou Yokota', 'country': 'Slovenia'},
        {'name': 'Joseph Pirogov', 'country': 'New Zealand'},
        {'name': 'Seda Bazhaev', 'country': 'Cyprus (Anglicized)'},
        {'name': 'Ангелина Круглова', 'country': 'Poland'},
        {'name': 'Cameron Palmer', 'country': 'Poland'},
        {'name': 'Otho Gammidge', 'country': 'Greenland'},
        {'name': 'Maria Holzman', 'country': 'Hungary'},
        {'name': 'Alastair Morrison', 'country': 'France'},
        {'name': 'Cecilie Fleischer', 'country': 'Norway'},
        {'name': 'Julia Duerr', 'country': 'Australia'},
        {'name': 'Pamphila Bolger-Baggins', 'country': 'Cyprus (Anglicized)'},
        {'name': 'Nurbika Sheripov', 'country': 'Hungary'},
        {'name': 'Anton Kaňka', 'country': 'France'},
        {'name': 'Frank Skjold', 'country': 'Denmark'},
        {'name': 'Shirvani Bazhaev', 'country': 'Sweden'},
        {'name': 'Grosvenor Bonneville', 'country': 'South Africa'},
        {'name': '梅子 平形', 'country': 'Norway'},
        {'name': 'Tekatokikuta ', 'country': 'Poland'},
        {'name': 'Anka Woźniak', 'country': 'United States'},
        {'name': 'Maudad Najjar', 'country': 'Brazil'},
        {'name': '阡華 牛', 'country': 'Austria'},
        {'name': 'Иммануил Волошин', 'country': 'Sweden'},
        {'name': 'Alexandra Mann', 'country': 'Sweden'},
        {'name': 'Uta Junker', 'country': 'Australia'},
        {'name': 'Mhret Iggi', 'country': 'Hungary'},
        {'name': 'Nokadotakitoku ', 'country': 'Finland'},
        {'name': 'Hoshika Saibara', 'country': 'Finland'},
        {'name': 'Bethany Haynes', 'country': 'Australia'},
        {'name': 'Aba Pálfy', 'country': 'Brazil'},
        {'name': 'Markus Szatmáry', 'country': 'Canada'},
        {'name': 'Đulaga Nišić', 'country': 'Italy'},
        {'name': 'Leikny Vegsund', 'country': 'Cyprus (Anglicized)'},
        {'name': 'Emin Kishiev', 'country': 'Iceland'},
        {'name': 'Алла Назарова', 'country': 'Australia'},
        {'name': 'Cailin Ritchie', 'country': 'Australia'},
        {'name': 'Bodi Salai', 'country': 'Hungary'},
        {'name': 'Salman Cham', 'country': 'New Zealand'},
        {'name': 'Renard Kozłowski', 'country': 'France'},
        {'name': 'Tatiana Mishina', 'country': 'Hungary'},
        {'name': '郁婷 姜', 'country': 'Germany'},
        {'name': 'Katrca Črešner', 'country': 'Denmark'},
        {'name': 'Gifford L\'Heureux', 'country': 'Hungary'},
        {'name': 'Dũng Huỳnh', 'country': 'Canada'},
        {'name': 'Genesis Rinzema', 'country': 'Iceland'},
        {'name': 'Blagomir Pučić', 'country': 'Germany'},
        {'name': 'Luca Schofield', 'country': 'Australia'},
        {'name': 'Annegreet Lammerts van Bueren', 'country': 'Hungary'},
        {'name': 'Valgeir Pálmason', 'country': 'Italy'},
        {'name': 'Bergdís Gunnlaugsdóttir', 'country': 'Greenland'},
        {'name': 'Shio Harada', 'country': 'United Kingdom'},
        {'name': 'Fre-qalsi Haile', 'country': 'Denmark'},
        {'name': 'Virag Szôcs', 'country': 'France'},
        {'name': 'Valentine Gorbunova', 'country': 'Hungary'},
        {'name': 'Muhtadi Haddad', 'country': 'United States'},
        {'name': 'Swen Metzger', 'country': 'New Zealand'},
        {'name': 'Mới Thạch', 'country': 'Spain'},
        {'name': 'Massimiliano Moretti', 'country': 'Cyprus (Anglicized)'},
        {'name': 'Udokamma Yobanna', 'country': 'Belgium'},
        {'name': 'George Borgen', 'country': 'Cyprus (Anglicized)'},
        {'name': 'Morgan van der Maarel', 'country': 'Czech Republic'},
        {'name': 'Bernadett Kálmán', 'country': 'Netherlands'},
        {'name': 'Yusef Kanaan', 'country': 'France'},
        {'name': 'Ibrahim Jönsson', 'country': 'Germany'},
        {'name': 'Yvette Rocher', 'country': 'Netherlands'},
        {'name': 'مهیار خانه ساز', 'country': 'Sweden'},
        {'name': '佩瑩 孟', 'country': 'Czech Republic'},
        {'name': 'Nicolas Ribeiro', 'country': 'Portugal'},
        {'name': '延 八城', 'country': 'Hungary'},
        {'name': 'Sandro Tkalčić', 'country': 'France'},
        {'name': '恵介 渋川', 'country': 'Poland'},
        {'name': 'Idzi Czarnecki', 'country': 'Italy'},
        {'name': 'Martin Bajer', 'country': 'Germany'},
        {'name': 'Chinelo Okorie', 'country': 'Czech Republic'},
        {'name': 'Beslan Kishiev', 'country': 'Belgium'},
        {'name': 'Indra Wallin', 'country': 'Netherlands'},
        {'name': 'آیناز حکمت', 'country': 'Austria'},
        {'name': 'Hermiken Sørby', 'country': 'Australia'},
        {'name': 'Elena Buccho', 'country': 'Canada'},
        {'name': 'Tuất Trần', 'country': 'Italy'},
        {'name': 'Samman Cham', 'country': 'Portugal'},
        {'name': 'Louise Swift', 'country': 'Spain'},
        {'name': 'Cui Ts\'ai', 'country': 'Hungary'},

    ];

    this.$get = function() {var self = this;return {
        getUsers: function() {
            // connect to RESTful, fetch users
            return self.users;
        }
    }};

    this.addUser = function(user) {
        // validations
        this.users.push(user);
    };
});

/*

// setters must be used in config sections
demo.config(function(usersProvider){
    usersProvider.addUser({'name':'Pepe Pérez','country':'Spain'});
});

// getters must be used within controllers

function MyCtrl($scope, users) {
    $scope.users = users.getUsers();
}
*/