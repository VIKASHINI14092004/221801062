const log = async (stack, level, pkg, message, token) => {
  try {
    const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ stack, level, package: pkg, message }),
    });
    const data = await res.json();
    console.log("Logged:", data);
  } catch (err) {
    console.error("Log error:", err);
  }
};

export default log;
