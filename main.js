async function get()
{
  const resp = await fetch("LargeFile.zip");
  console.log(await resp.arrayBuffer());
}

get();
