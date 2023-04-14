let api_key = "914df0c786354f19a8be9e792b06d30c";
    let btn = document.getElementById("btn");
    let locationInput = document.getElementById("location");
    let time = document.getElementById("time");

    btn.addEventListener("click", () => {
      getTime();
      GeolocationPosition();
    });
    const getTime = async () => {
      const res = await fetch(
        `https://timezone.abstractapi.com/v1/current_time/?api_key=${api_key}&location=${locationInput.value}`
      );
      const data = await res.json();
      time.value = data.datetime;
      locationInput.value = "";
    };

    locationInput.addEventListener("keypress", function(event) {
      if ( event.key === "Enter") {
        event.preventDefault();
        btn.click();
      }
    });