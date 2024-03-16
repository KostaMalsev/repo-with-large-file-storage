async function get()
{
  const resp = await fetch("LargeFile.zip");

  const blob = await resp.blob();

  const file = window.URL.createObjectURL(blob);
  window.location.assign(file);
  
}

get();
