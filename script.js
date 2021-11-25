/*var body = document.getElementsByTagName("body")[0];
var andrey = document.createElement("andrey");

body.append(andrey);
andrey.setAttribute("andrey","andrey");
andrey.innerHTML = "Привет Андрей";*/

var masName = ["Nastya", "Lesha", "Sasha", "Masha", "Dasha","Katya", "Kiti", "Dan", "Kiril", "Stas"];
var masImportance = ["На майбутнє", "Терміново", "Почекаю"];
var masColor = ["red", "yellow", "green", "orange"];
var masComment = ["Hello!I want to buy your products with home delivery","Sorry,I entered my name incorrectly. My name is Suzzi", "I wont a dog","When inspiration does not come to me, I go halfway to meet it. Sigmund Freud","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","All we have to decide is what to do with the time that is given to us"]
var masDoctor = ["Abramson","Ferguson","Lamberts","Michaelson","Jacobson"]
var masBackground = ["#e7f7ed", "#d6e1d9"];
var countColor = 0;
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
table.style.width = "95%";
table.style.height = "70vh";
table.style.margin = "auto";
table.style.fontSize = "20px";

    for(var j = 0; j < 11; j++){
        var tr = document.createElement("tr");


        body.append(table);
        table.append(tr);

        for(var i = 0; i < 9; i++){
            var td = document.createElement("td");
            td.style.padding = "10px";
            td.style.textAlign = "center";
            tr.append(td);
            td.style.background = masBackground[countColor];
            td.style.width = "max-content"
        }
        if(countColor == 0){
            countColor = 1;
        }else{
            countColor = 0;
        }
    }

    for(var i = 0; i < 11; i++){
        if(i == 0){
            document.getElementsByTagName("td")[0].innerHTML = "№";
            document.getElementsByTagName("td")[1].innerHTML = "Назва";
            document.getElementsByTagName("td")[2].innerHTML = "Кількість";
            document.getElementsByTagName("td")[3].innerHTML = "Важливість";
            document.getElementsByTagName("td")[4].innerHTML = "Коментар";
            document.getElementsByTagName("td")[5].innerHTML = "Кабінет";
            document.getElementsByTagName("td")[6].innerHTML = "Лікар";
            document.getElementsByTagName("td")[7].innerHTML = "Дата замовлення";
            document.getElementsByTagName("td")[8].innerHTML = "Статус";
            for( j = 0; j < 9; j ++){
                document.getElementsByTagName("td")[j].style.padding = "30px";
                document.getElementsByTagName("td")[j].style.background = "#c7f1d9";
            }
        }else{
            for(var j = 9 * i; j < 9 * i + 1; j++){
                document.getElementsByTagName("td")[j].innerHTML = "" + (i + 1);
                document.getElementsByTagName("td")[j + 1].innerHTML = masName[Math.floor(Math.random() * masName.length)];
                document.getElementsByTagName("td")[j + 2].innerHTML = Math.floor(Math.random() * 100) + "шт";
                var random = masImportance[Math.floor(Math.random() * masImportance.length)];
                document.getElementsByTagName("td")[j + 3].innerHTML = ""  + random;
                if(random == masImportance[0]){
                    document.getElementsByTagName("td")[j + 3].style.background = ""  + masColor[1];
                }else if(random == masImportance[1]){
                    document.getElementsByTagName("td")[j + 3].style.background  = ""  + masColor[0];
                }else if(random == masImportance[2]){
                    document.getElementsByTagName("td")[j + 3].style.background  = ""  + masColor[3];
                }
                document.getElementsByTagName("td")[j + 4].innerHTML = masComment[Math.floor(Math.random() * masComment.length)];
                document.getElementsByTagName("td")[j + 5].innerHTML = Math.floor(1 + Math.random() * 5) + " кабінет";
                document.getElementsByTagName("td")[j + 6].innerHTML = masDoctor[Math.floor(Math.random() * masDoctor.length)];
    
                document.getElementsByTagName("td")[j + 7].innerHTML = "2021.11.25";
    
                var input = document.createElement("input");
                document.getElementsByTagName("td")[j + 8].append(input);
                input.setAttribute("type","checkbox");
                input.style.width = "18%";
                input.style.height = "5vh";
        }
    }
}