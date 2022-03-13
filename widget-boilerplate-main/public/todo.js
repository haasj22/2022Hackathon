var task_complete_count = 0;
var task_added = 1;
var blocked = 0;

$(function() {
    var seconds, temp;
    var GivenTime = document.getElementById('countdown').innerHTML;
    
    function countdown() {
      time = document.getElementById('countdown').innerHTML;
      timeArray = time.split(':')
      seconds = timeToSeconds(timeArray);
      console.log(seconds);
      
      // Do something when the timer is out
      if (seconds === 0) {
        clearTimeout(timeoutMyOswego);
        return;
      }
      
      seconds--;
      temp = document.getElementById('countdown');
      temp.innerHTML = secondsToTime(seconds);
      timeoutMyOswego = setTimeout(countdown, 1000);
    };
    countdown();
    function timeToSeconds(timeArray) {
      var minutes = (timeArray[0] * 1);
      var seconds = (minutes * 60) + (timeArray[1] * 1);
      return seconds;
    }
    
    function secondsToTime(secs) {
      var hours = Math.floor(secs / (60 * 60));
      hours = hours < 10 ? '0' + hours : hours;
      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);
      seconds = seconds < 10 ? '0' + seconds : seconds;
    
      return minutes + ':' + seconds;
    }
    // function startTimer(duration, display) {
    //     var timer = duration, minutes, seconds;
    //     setInterval(function () {
    //         minutes = parseInt(timer / 60, 10)
    //         seconds = parseInt(timer % 60, 10);
    
    //         minutes = minutes < 10 ? "0" + minutes : minutes;
    //         seconds = seconds < 10 ? "0" + seconds : seconds;
    
    //         display.text(minutes + ":" + seconds);
    
    //         if (--timer < 0) {
    //             timer = duration;
    //         }
    //     }, 1000);
    // }
    
    //     var fiveMinutes = 60 * 5,
    //         display = $('#time');
    //     startTimer(fiveMinutes, display);
    $("#sortable").on("click", function(event) {
      
      if (blocked != 1 && task_complete_count  == 9) {
        console.log(document.getElementById("Vegdahl").src)
        document.getElementById("Vegdahl").src = "https://media.discordapp.net/attachments/930642738213445725/935771905607213126/unknown.png";
        document.getElementById("Vegdahl").style.height = "90%";
        document.getElementById("Vegdahl").style.width = "90%";
      }
      else if (blocked != 1 && task_complete_count  == 3) {
        console.log(document.getElementById("Cenek").src)
        document.getElementById("Cenek").src = "thumbsCenek.PNG"
        document.getElementById("Cenek").style.width = "80%";
        document.getElementById("Cenek").style.height = "80%";
      }
      else if (blocked != 1 && task_complete_count == 6) {
        console.log(document.getElementById("Oberoi").src)
        document.getElementById("Oberoi").src = "CroppedOberoi.jpg"
        document.getElementById("Oberoi").style.height = "100%";
        document.getElementById("Oberoi").style.width = "100%";
      }
      else {
        var audio = new Audio('youCanDoIt.mp3');
        audio.play();
      }
      console.log(event.target);
      var $thatItem = $(event.target).parents("li");
      switch (event.target.nodeName) {
        case "SPAN":
        case "I":
          $thatItem.fadeOut(500, function() {
            task_complete_count += 1;
            if(task_complete_count == task_added) {
              blocked = 0;
              if (task_added >= 9) {
                document.getElementById("Vegdahl").src = "https://media.discordapp.net/attachments/930642738213445725/935771905607213126/unknown.png";
                document.getElementById("Vegdahl").style.height = "90%";
                document.getElementById("Vegdahl").style.width = "90%";
              } else {
                document.getElementById("Vegdahl").src = "https://dirphotos.up.edu/vegdahl.jpg"
                document.getElementById("Vegdahl").style.height = "40%";
                document.getElementById("Vegdahl").style.width = "40%";
              }
              if (task_added >= 3) {
                document.getElementById("Cenek").src = "thumbsCenek.PNG"
                document.getElementById("Cenek").style.width = "80%";
                document.getElementById("Cenek").style.height = "80%";
              } else {
                document.getElementById("Cenek").src = "https://dirphotos.up.edu/cenek.jpg"
                document.getElementById("Cenek").style.width = "40%";
                document.getElementById("Cenek").style.height = "40%";
              }
              if (task_added >= 6) {
                document.getElementById("Oberoi").src = "CroppedOberoi.jpg"
                document.getElementById("Oberoi").style.height = "100%";
                document.getElementById("Oberoi").style.width = "100%";
              }
              else {
                document.getElementById("Oberoi").src = "https://dirphotos.up.edu/oberoi.jpg"
                document.getElementById("Oberoi").style.height = "40%";
                document.getElementById("Oberoi").style.width = "40%";
              }
            }
            $thatItem.remove();
            $("#sortable").sortable("refresh");
          });
          break;
        case "LABEL":
          $thatItem.toggleClass("completed");
          break;
      }
      setTimeout(function() {
        updateLocalStorage($("#sortable"));
      }, 500);
      event.stopPropagation();
    });
  
    $("#task-list").submit(function(event) {
      event.preventDefault();
      // Grabbing the text typed
      var todoText = $("#task").val();
      setTimeout( function() { makeTeachersSad(); }, 1000);

      task_added += 1;
      addListItem($("#sortable"), todoText, false);
      // Clear the text field
      $("#task").val("");
      updateLocalStorage($("#sortable"));
    });
  
    $(".fa-plus").click(function() {
      $("#task-list").fadeToggle();
    });
    $("#sortable").sortable({
      update: function(e, ui) {
        updateLocalStorage($(this));
      }
    }).disableSelection();
  
    function addListItem($t, s, c) {
      //create a new LI
      var $li = $("<li>", {
        id: "task-" + s.replace(" ", "_")
      });
      if (c) {
        $li.addClass("completed");
      }
      var $wrap = $("<span>").appendTo($li);
      $wrap.append($("<i>", {
        class: "fa fa-trash"
      }));
      $li.append($("<label>").html(s));
      $li.appendTo($t);
      $t.sortable("refresh");
    }

    function makeTeachersSad() {
        if (document.getElementById("sortable").innerHTML.trim() == "") {
          return
        }
        var audio2= new Audio('failureSound.mp3');
        audio2.volume = 1.0;
        audio2.play();
        document.getElementById("Vegdahl").src = "bonkVegdahl.PNG";
        document.getElementById("Cenek").src = "sadCenek.PNG";
        document.getElementById("Oberoi").src = "sadOberoi.png";
        blocked = 1;
        
    }
  
    function updateLocalStorage($list) {
      var tasks = {};
      $list.find("li").each(function(ind, elem) {
        var task = $(elem).text().trim();
        var completed = $(elem).hasClass("completed");
        tasks[task] = completed;
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem("tasks", JSON.stringify(tasks));
        }
      });
    }
  
    if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      if (localStorage.getItem("tasks") !== "undefined") {
        var localTasks = JSON.parse(localStorage.getItem("tasks"));
        // Grab stored tasks
        $("#sortable").find("li").remove();
        $.each(localTasks, function(task, status) {
          addListItem($("#sortable"), task, status);
        });
      }
    } else {
      // Sorry! No Web Storage support..
    }

  });