function process(val: unknown) {
  if (
    !!val &&
    typeof val === "object" &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log();
  }
}
