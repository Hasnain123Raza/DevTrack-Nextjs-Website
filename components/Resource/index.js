export default function Resource({
  className,
  initiateAsync,
  asyncStatus,
  idleComponent: Idle,
  pendingComponent: Pending,
  rejectedComponent: Rejected,
  fulfilledComponent: Fulfilled,
}) {
  return asyncStatus === "idle" ? (
    <Idle className={className} initiateAsync={initiateAsync} />
  ) : asyncStatus === "pending" ? (
    <Pending className={className} />
  ) : asyncStatus === "rejected" ? (
    <Rejected className={className} initiateAsync={initiateAsync} />
  ) : asyncStatus === "fulfilled" ? (
    <Fulfilled className={className} />
  ) : (
    "Default"
  );
}
