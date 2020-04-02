INSERT INTO arcadesticks
    (title, mfg, parts, platform, purchaselink, pictures)
VALUES
    ('Qanba Dragon', 'Qanba', 'Sanwa', 'PC, PS4, Xbox', 'https://www.amazon.com/Joystick-PlayStation-Fighting-Officially-Licensed-4/dp/B01NGYL2NH/ref=sr_1_2?dchild=1&keywords=qanba+dragon&qid=1585847827&sr=8-2', null),
    ('Hori Fighting Edge', 'Hori', 'Hori', 'PC, PS4', 'https://www.amazon.com/Fighting-Arcade-PlayStation-Officially-Licensed-4/dp/B01A6GCN6G/ref=sr_1_2?dchild=1&keywords=Hori+fighting+edge&qid=1585847913&sr=8-2', null),
    ('Etokki Omni', 'Etokki', 'Sanwa OR Taeyoung', 'Available on all platforms', 'https://www.etokki.com/index.php?route=product/search&search=omni', null),
    ('Razer Panthera', 'Razer', 'Sanwa', 'PC, PS4', 'https://www.amazon.com/Razer-Panthera-Evo-Mod-Capable-playstation-4/dp/B07J9JTW9L/ref=sr_1_4?dchild=1&keywords=arcade+stick&qid=1585848874&sr=8-4', null),
    ('Hitbox Arcade', 'Hitbox', 'Sanwa', 'PC, PS4', 'https://www.hitboxarcade.com', null);

INSERT INTO users
    (first_name, last_name, username, email)
VALUES
    ('Dustin', 'Meyers', 'popcornfan1985', 'dmeyers@aol.com'),
    ('Gordy', 'Birddiv', 'hotdogsammich1989', 'gordy@gmail.com'),
    ('Bailey', 'Day', 'McNugMeatball', 'bdjohnsonn@gmail.com');

INSERT INTO stickreviews
    (reviewerid, stars, revtitle, review, stickid)
VALUES
    (1, 5, 'Large', 'Large and sturdy. Very well made but not portable.', 1),
    (1, 5, 'Budget friendly', 'Great quality for the price.', 2),
    (2, 3, 'Solidly built', 'Well built, but lacking in features.', 3),
    (3, 5, 'Awesome', 'Complete game changer when it comes to character control.', 4);